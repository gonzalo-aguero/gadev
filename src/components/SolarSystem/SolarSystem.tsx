import "./styles.css";
export default function SolarSystem() {
    return (
        <>
            <div id="solar-system">
                <span className="spherical-body sun"><span className="center"></span></span>
                <span className="spherical-body planet" id="planet1"></span>
                <span className="spherical-body planet" id="planet2"></span>
                <span className="spherical-body planet" id="planet3"></span>
            </div>
        </>
    );
}