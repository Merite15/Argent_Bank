import "./style.scss";

export const Message = ({ codeStatus }: { codeStatus: number }): JSX.Element => {
    switch (codeStatus) {
        case 0: return (<></>);

        case 200:
            return (
                <div className="message-ok">
                    <p>Operation successful !</p>
                </div>
            );

        case 400:
            return (
                <div className="message-error">
                    <p>Error {codeStatus} invalid inputs </p>
                </div>
            );

        default:
            return (
                <div className="message-error">
                    <p>Error {codeStatus} server error</p>
                </div>
            );
    }
}