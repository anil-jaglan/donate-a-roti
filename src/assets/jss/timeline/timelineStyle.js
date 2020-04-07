import {    
    roseColor,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor
} from "assets/jss/material-kit-react.js";

const timelineStyle = {
    feed: {
        display: "flex",
        flexDirection: "column",
    },
    feedArea: {
        display: "flex",
        padding: '0.500rem 0.875rem',
        verticalAlign: "middle",
    },
    feedText: {
        margin: "0.8rem 0 0 0.8rem",
        color: "#6c757d",
    },
    textMuted: {
        color: "#6c757d",
        fontSize: '0.5rem',
    },
    avatar: {
        display: "flex",
    },
    primary: {
        backgroundColor: primaryColor,
        color: '#ffffff',
        boxShadow:
            "0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: primaryColor,
            boxShadow:
                "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
        }
    },
    info: {
        backgroundColor: infoColor,
        color: '#ffffff',
        boxShadow:
            "0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: infoColor,
            boxShadow:
                "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
        }
    },
    success: {
        backgroundColor: successColor,
        color: '#ffffff',
        boxShadow:
            "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: successColor,
            boxShadow:
                "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
        }
    },
    warning: {
        backgroundColor: warningColor,
        boxShadow:
            "0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: warningColor,
            boxShadow:
                "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"
        }
    },
    danger: {
        backgroundColor: dangerColor,
        color: '#ffffff',
        boxShadow:
            "0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: dangerColor,
            boxShadow:
                "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
        }
    },
    rose: {
        backgroundColor: roseColor,
        color: '#ffffff',
        boxShadow:
            "0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: roseColor,
            boxShadow:
                "0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)"
        }
    }
};

export default timelineStyle;