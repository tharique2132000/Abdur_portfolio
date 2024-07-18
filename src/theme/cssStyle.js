const styles = {
    primaryButton: {
        border: "2px solid #ec4899",
        borderRadius: "5px",
        padding: "10px 20px",
        fontWeight: "bold",
        background: "#F2545B",
        color: "white",
        textTransform: "uppercase",
        transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
        minWidth:"200px",
        "&:hover": {
            backgroundColor: "white",
            color: "#A93F55",
            borderColor:"#A93F55"
        }
    },
    secondaryButton: {
        border: "2px solid #333",
        borderRadius: "5px",
        padding: "10px 20px",
        fontWeight: "bold",
        background: "transparent",
        color: "#333",
        minWidth:"200px",
        textTransform: "uppercase",
        transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
        "&:hover": {
            backgroundColor: "#333",
            color: "white"
        }
    }
};

export default styles;
