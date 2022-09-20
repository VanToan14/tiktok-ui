import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
 
function AccountItem (){
    return(
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e6023b9eb730476de45dfbf22842cb33~c5_100x100.jpeg?x-expires=1663743600&x-signature=lMSvolu62AtMo1PbmAGXW9jUywU%3D" alt="hoaa" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')}>nguyenvana</span>
            </div>
        </div>
    )
}

export default AccountItem;