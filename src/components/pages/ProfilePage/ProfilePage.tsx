import React from "react";
import scss from "./ProfilePage.module.scss";
const ProfilePage = () => {
	return (
		<div className={scss.ProfilePage}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.my}>
						<div className={scss.home}>
							<h1>Home /</h1>
							<h1>My Account</h1>
						</div>
						<div>
							<h1>
								Welcome! <span>Md Rimel</span>
							</h1>
						</div>
					</div>
					<div className={scss.profile}>
						<div className={scss.text}>
							<h1>Manage My Account</h1>
							<p>My Profile</p>
							<p>Address book</p>
							<p>My Payment Options</p>
							<p></p>
							<h1>My Orders</h1>

							<p>My Returns</p>
							<p>My Cancellations</p>
							<p></p>
							<h1>My Wishlist</h1>
						</div>
						<div className={scss.book}>
							<h1>Edit Your Profile</h1>
         <div className={scss.in}>
				 <div className={scss.inputs}>
                <h2>
                  First Name
                </h2>
                <input type="text" placeholder="Md" />
              </div>
							<div className={scss.inputs}>
                <h2>
                  Last Name
                </h2>
                <input type="text" placeholder="Rimel" />
              </div>
							<div className={scss.inputs}>
                <h2>
                 Email
                </h2>
                <input type="text" placeholder="rimel111@gnail.com" />
              </div>
							<div className={scss.inputs}>
                <h2>
                  Address
                </h2>
                <input type="text" placeholder="Kingston,5236,United State" />
              </div>
				 </div>
				 <div className={scss.pass}>
					<h1>Password Changes</h1>
					<input type="text"  placeholder="Current Password"/>
					<input type="text" placeholder="New Password" />
					<input type="text"  placeholder="Confirm New Password"/>
			<div className={scss.btn}>
			<button>Cancel</button>
			<button>Save Changes</button>
			</div>
				 </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
