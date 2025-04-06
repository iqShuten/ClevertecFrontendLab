import Avatar from '~/shared/assets/icons/Breakfast.png';
import Logo from '~/shared/assets/icons/logo.svg';

import cls from './Headbar.module.scss';

export const Headbar = () => {
    <></>;
    return (
        <header className={cls.Headbar}>
            <img className={cls.logo} src={Logo} alt='Logo' />
            <div className={cls.route}>
                <p>Главная</p>
            </div>
            <div className={cls.userInfo}>
                <img className={cls.avatar} src={Avatar} />
                <div className={cls.userNameBlock}>
                    <span className={cls.userName}>Екатерина Константинопольская</span>
                    <span className={cls.userInstagram}>@bake_and_pie</span>
                </div>
            </div>
        </header>
    );
};
