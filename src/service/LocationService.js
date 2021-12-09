import { USER_BASE_URL } from '../constants';
import { get } from '../utils/RestAPI.js';

const LOC = 'locations';

function getLocations() {
    if (sessionStorage.getItem(LOC)) {
        return JSON.parse(sessionStorage.getItem(LOC));
    }
    return loadLocations();
}

async function loadLocations() {
    const [locations] = await Promise.all([get('http://localhost:8081/locations')]);
    if (locations) {
        sessionStorage.setItem(LOC, JSON.stringify(locations));
    }
    return locations;
}

loadLocations().then(console.log('locations loaded...'));


export function getStates() {
    const states = getLocations().states.map((st) => { return { id: st.id, name: st.name } });
    return Promise.resolve(states);

}

export function getCities(stateId) {
    if(stateId === 'undefined') {
        return [];
    }
    const states = doFilter(getLocations().states, stateId);
    if (states && states.length > 0) {
        return mapChildren(states[0]);
    }
    return [];
}

export function getLocality(stateId, cityId) {
    if(stateId === 'undefined' || cityId === 'undefined') {
        return [];
    }
    const states = doFilter(getLocations().states, stateId);
    if (states && states.length > 0) {
        const state = states[0];
        const cities = doFilter(state.children, cityId);
        if (cities && cities.length > 0) {
            return mapChildren(cities[0]);
        }
    }
    return [];
}

function doFilter(data, id) {
    return data.filter((d) => d.id == id);
}

function mapChildren(data) {
    return data.children.map((c) => { return { id: c.id, name: c.name } });
}