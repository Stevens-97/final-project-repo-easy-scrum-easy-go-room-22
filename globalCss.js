// *******General CSS*******
export const centerContentRow = {
  display: 'flex',
  flexDirection: 'row',
};
export const centerContentCol = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

// *******NAVBAR CSS*******
export const navBarApp = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const navBarToolBar = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '1200px',
  padding: 0,
};

export const navBarContainer = {
  display: 'flex',
  justifyContent: 'center',
};

export const navBarBox = {
  display: 'flex',
  wrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
};

export const navbarButton = {
  color: '#fff',
  background: '#FF8957',
  '&:hover': { background: '#FF8957' },
  fontFamily: 'Inter',
  fontStyle: 'normal',
  letterSpacing: '0em',
};

export const navbarSidePageBox = {
  backgroundColor: '#FF8957',
};

// ********* COURSECARD CSS *******
export const courseCardContainer = {
  py: 6,
};

export const courseCardCardSection = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const courseCardCardMedia = {};

export const courseCardCardContent = {
  flexGrow: 1,
  paddingTop: '10px',
};

export const courseCardContentTitle = {
  fontFamily: 'Lato',
  fontWeight: '600',
  color: '#222',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '20rem',
};

export const courseCardContentTeacherName = {
  fontFamily: 'Rhodium Libre',
  fontWeight: '300',
  fontSize: '18px',
  textAlign: 'right',
  color: '#bbb',
  marginBottom: '10px',
};
export const courseCardContentCourseBrief = {
  fontFamily: 'Noto Sans Display',
  fontWeight: '400',
  fontSize: '16px',
  color: '#666',
  marginBottom: '10px',
};

export const courseCardActions = {
  width: '100%',
  justifyContent: 'space-evenly',
  paddingBottom: '20px',
};

export const courseCardRateAvg = {
  fontFamily: 'Noto Sans Display',
  fontSize: '18px',
  fontWeight: '400',
  color: '#faaf00',
};
export const courseCardReviewCount = {
  fontFamily: 'Noto Sans Display',
  fontSize: '15px',
  fontWeight: '400',
  color: '#666',
};
export const courseCardButton = {
  color: '#fff',
  background: '#FF8957',
  '&:hover': { background: '#ff763c' },
  border: 'none',
};

// *******BANNER CSS*******
export const bannerBox = {
  backgroundImage: 'url("https://i.lensdump.com/i/redSH7.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#555555',
  backgroundSize: '160rem',
  width: '100%',
  height: '600px',
};

export const bannerNavBar = {};
export const bannerContainer = {
  background: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '80%',
};

// Webpage size for header
export const bannerTypographyWeb = {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  borderRadius: '6px',
  width: '50rem',
  color: '#fff',
  fontFamily: 'Inter',
  fontSize: '60px',
  fontStyle: 'normal',
  fontWeight: '700',
  letterSpacing: '0em',
  textAlign: 'center',
};

// Mobile size for header
export const bannerTypographyMobile = {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  width: '25rem',
  color: '#fff',
  fontSize: '60px',
  fontWeight: '700',
};

// Webpage size for sub header
export const bannerTypographySubWeb = {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  width: '1000px',
  color: '#ddd',
  fontFamily: 'Inter',
  fontSize: '20px',
  fontWeight: '200',
  lineHeight: '24px',
};

// Mobile size for sub header
export const bannerTypographySubMobile = {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  width: '40rem',
  color: '#fff',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center',
};

export const bannerStack = {
  pt: 4,
};

// Web size for the search field
export const bannerTextFieldWeb = {
  background: '#fff',
  width: '30rem',
  borderRadius: '10px',
};

// Mobile size for the search field
export const bannerTextFieldMobile = {
  background: '#fff',
  width: '10rem',
};

export const bannerButton = {
  marginRight: '5rem',
  color: '#fff',
  background: '#FF8957',
  '&:hover': { background: '#ff763c' },
  fontFamily: 'Inter',
  fontSize: '18px',
  fontWeight: '200',
  border: 'none',
};

// *******Footer CSS*******
export const footerContainerBoxMd = {
  bgcolor: '#555555',
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  padding: '1rem 4rem',
  color: '#9A9A9A',

  left: '0',
  width: '100%',
  bottom: '110',
};

export const footerContainerBoxLgr = {
  bgcolor: '#555555',
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  padding: '1rem 4rem',
  color: '#9A9A9A',

  position: 'absolute',
  bottom: '0',
  width: '100%',
};
export const footerBox = { display: 'flex', justifyContent: 'column' };

export const footerTypography = { maxWidth: '20rem', color: '#9A9A9A' };

// *******Profile CSS*******

export const titleTypo = {
  fontFamily: 'sans-serif',
  fontSize: '40px',
  fontStyle: 'normal',
  fontWeight: '800',
  lineHeight: '40px',
  letterSpacing: '-1px',
  textAlign: 'left',
};

export const nameTypo = {
  fontFamily: 'Rhodium Libre',
  margin: '10px 0 10px 0',
  fontSize: '25px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '41.04px',
  letterSpacing: '0em',
  textAlign: 'left',
};

export const subHeadingTypo = {
  fontFamily: 'Roboto',
  fontSize: '36px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '40px',
  letterSpacing: '0em',
  textAlign: 'left',
};

export const generalTypo = {
  fontFamily: 'sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: '19px',
  margin: '10px 0 10px 0',
  letterSpacing: '0rem',
  textAlign: 'left',
};

export const aboutSection = {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: '70%',
};

export const profileSearchBar = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '4rem 0',
};
