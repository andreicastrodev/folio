const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex justify-center">
            <div className="p-9">
                <p className="self-center text-center">&copy; {currentYear} Andrei Castro. All Rights Reserved.
                </p>

            </div>
        </div>
    )

};


export default Footer;