import React from 'react';

const ProfileSideBar = () => {
    return (
        <div className="sidebar card">
            <ul>
                <li>
                    <a href="/myprofile">My Profile</a>
                </li>
                <li>
                    <a href="/accountsetting">Account Setting</a>
                </li>
                <li>
                    <a href="/cart">My Card</a>
                </li>
                <li>
                    <a href="wishlist">My Wish list</a>
                </li>
                <li>
                    <a href="/cart">My Orders</a>
                </li>
                <li>
                    <a href="/wallet">My Wallet</a>
                </li>
                <li>
                    <a href="/giftcard">My Gift card</a>
                </li>
                <li>
                    <a href="/voucher">My Vouchar</a>
                </li>
                <li>
                    <a href="/notification">Notifications</a>
                </li>
                <li>
                    <a href="/AudiencePool">Audience Pool</a>
                </li>
                <li>
                    <a href="">My Reviews</a>
                </li>
                <li>
                    <a href="">Refferal Programme</a>
                </li>
            </ul>
        </div>
    );
};

export default ProfileSideBar;