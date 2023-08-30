import "./style.scss";

interface MessageProps { codeStatus: number }

export const Message = ({ codeStatus }: MessageProps): JSX.Element => {
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
                    <p>Error {codeStatus} : User not found </p>
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