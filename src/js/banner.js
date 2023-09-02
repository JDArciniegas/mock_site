const bannerContainer = document.createElement('div');
bannerContainer.setAttribute('id','banner')

const bannerHeader = document.createElement('h1');
bannerHeader.setAttribute('id', 'message')
bannerHeader.innerText = 'Adopt Today'

bannerContainer.appendChild(bannerHeader);

const Banner = () => {
  return bannerContainer;
}

export default Banner;
