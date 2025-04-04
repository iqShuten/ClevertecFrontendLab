import Logo from '~/shared/icons/logo.svg';

import cls from './Headbar.module.scss';

export const Headbar = () => {
    <></>;
    return (
        <header className={cls.Headbar}>
            <img src={Logo} alt='Logo' />
            <div className={cls.route}>
                <p>Главная</p>
            </div>
            <></>
        </header>
    );
};
