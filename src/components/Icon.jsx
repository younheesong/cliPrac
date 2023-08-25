import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg';
import basketIcon from '../assets/icons/basket.svg';
import bellIcon from '../assets/icons/bell.svg';
import heartIcon from '../assets/icons/heart.svg';
import homeIcon from '../assets/icons/home.svg';
import menuIcon from '../assets/icons/menu.svg';
import searchIcon from '../assets/icons/search.svg';
import userIcon from '../assets/icons/user.svg';
import dashboardIcon from '../assets/icons/dashboard.svg';
import leftArrowIcon from '../assets/icons/left_arrow.svg';

type IconProps = {
  width: Number,
  height: Number,
  stroke?: String,
  fill?: String,
  name:
    | 'basket'
    | 'bell'
    | 'heart'
    | 'home'
    | 'menu'
    | 'search'
    | 'user'
    | 'leftArrow'
    | 'dashboard',
};

const Icon = ({
  width = 36,
  height = 36,
  name,
  fill = '#fff',
  stroke,
}: IconProps) => {
  const nameToIcon = {
    basket: basketIcon,
    bell: bellIcon,
    heart: heartIcon,
    home: homeIcon,
    menu: menuIcon,
    search: searchIcon,
    user: userIcon,
    dashboard: dashboardIcon,
    leftArrow: leftArrowIcon,
  };
  return (
    <WithLocalSvg
      stroke={stroke}
      fill={fill}
      width={width}
      height={height}
      asset={nameToIcon[name]}
    />
  );
};

export default Icon;
