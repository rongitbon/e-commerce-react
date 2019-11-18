import { createSelector } from 'reselect';

const selectHomepage = state => state.homepage;

export const selectHomepageBanner = createSelector( 
    [selectHomepage],
    homepage => homepage.bannerImg
);

export const selectHomepageCards = createSelector( 
    [selectHomepage],
    homepage => homepage.cards
);

export const selectHomepageAboutUs = createSelector( 
    [selectHomepage],
    homepage => homepage.aboutUsImg
);