import QRCode from "react-qr-code";
import './styles.css';
import ArrowUp from '../../assets/icons/arrow-up.svg'

export default function Contacts() {
    return (
        <div id="contacts">
            <h1>Contacts</h1>

            <div style={{ background: 'white', padding: '16px' }}>
                <QRCode value='https://wa.me/5511914188060' />
            </div>

            <a href="# "><img src={ArrowUp} alt="up" /></a>
        </div>
    );
}