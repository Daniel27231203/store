'use client';

import  scss from './AuthPage.module.scss';
import Link from 'next/link';

const AuthPage: React.FC = () => {


  return (
<section id={scss.notRegisSection}>
    <div className={scss.content}>
    <div className={scss.notRegistered}>
    <h2>You are not registered !</h2>
    <p>To access this page, please create an account or log in.</p>
    <div className={scss.actions}>
      <Link href="/auth/sign-up">
        <button className={scss.signUpButton}>Create an account</button>
      </Link>
      <Link href="/auth/sign-in">
        <button className={scss.signInButton}>Log in</button>
      </Link>
    </div>
  </div>
    </div>
</section>

  );
};

export default AuthPage;
