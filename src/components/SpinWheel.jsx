import { useEffect } from "react";

const ElfsightWidget = () => {
    useEffect(() => {
        // Dynamically load the Elfsight script
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);

        // Cleanup script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            {/* Add the Elfsight div */}
            <div
                className="elfsight-app-40ae4f8d-98bf-463d-bf81-10cdbdca2278"
                data-elfsight-app-lazy
            ></div>
        </div>
    );
};

export default ElfsightWidget;
