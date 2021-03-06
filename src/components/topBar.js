import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SEARCH_PAGE, FAVORITES_PAGE } from '../Consts';
import { darken } from 'polished';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_SWITCH_THEME, ACTION_SWITCH_TEMP_UNIT, METRIC_UNIT } from '../state/reducers/configReducer';

const TopBar = () => {

    const dispatch = useDispatch();
    const tempUnit = useSelector(state => state.config.tempUnit);
    const isMetricUnit = tempUnit === METRIC_UNIT;

    return (
        <Wrapper>
            <NavigationBar>
                <Navigation onClick={() => dispatch({ type: ACTION_SWITCH_THEME })}>Change Theme</Navigation>
                <Navigation onClick={() => dispatch({ type: ACTION_SWITCH_TEMP_UNIT })}>Change to {isMetricUnit ? 'Fahrenheit' : 'Celsius'}</Navigation>
            </NavigationBar>

            <NavigationBar>
                <Navigation to={SEARCH_PAGE}>Search</Navigation>
                <Navigation to={FAVORITES_PAGE}>Favorites</Navigation>
            </NavigationBar>
        </Wrapper>
    )
}

export default TopBar;
// export default connect(state => state)(TopBar)

// CSS //
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
height: 4rem;
background-color: ${p => p.theme.mainColor};
font-size: 1.4rem;
color: #fff;
`

const NavigationBar = styled.div`
display: flex;
`

const Navigation = styled(Link)`
height: 100%;
padding: 0 2rem;
display: flex;
align-items: center;
background-color:  ${p => darken(0.1, p.theme.mainColor)};
color: #fff;

&:not(:first-child){
    border-left: .1rem solid #fff;
}

&:hover{
background-color:  ${p => darken(0.2, p.theme.mainColor)}; 
}
`