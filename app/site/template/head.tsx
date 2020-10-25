import * as  React from "react";
import "../style.less";
import LogoSvg from "app/assert/svg/logo.svg";
export function PageHead() {
    return <div className={'head'}>
        <div className='page-center'>
            <div className='head-left'>
                <LogoSvg></LogoSvg>
                <span>火凤凰</span>
            </div>
            <div className='head-right'>
                <a href='/login'>登陆</a>
                <a href='/reg'>注册</a>
            </div>
        </div>
    </div>
}