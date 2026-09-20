import React from "react";

const Title = ({ children, subtitle, className = "", align = "left" }) => {
    const alignmentClass =
        align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";

    return (
        
        <div className={`title-banner ${className}`}>
           
            <div className={`container-custom ${alignmentClass}`}>
                <h2 className="title-heading">{children}</h2>
                {subtitle && <p className="title-subtitle">{subtitle}</p>}
            </div>
        </div>
    );
};

export default Title;