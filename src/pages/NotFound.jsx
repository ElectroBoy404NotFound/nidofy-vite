import AnimatedButton from "../components/AnimatedButton";

function NotFound() {
    return (
        <div style={{ 
            textAlign: "center", 
            marginTop: "50px",
            left: '50%', 
            top: '35%'
        }}>
            <h1 style={{ fontSize: "120px", margin: 60, color: "red" }}>404?!</h1>
            <p>Yo bro. I don't exist.</p>
            <br />
            
            <AnimatedButton text="Back to Pavilion" to="/" colour="secondary" />
                {/* Back to Pavilion */}
            {/* </AnimatedButton> */}
        </div>
    );
}

export default NotFound;