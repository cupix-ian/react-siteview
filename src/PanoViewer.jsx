import siteView4embed from '@cupix-sdk/siteview4embed';
import React, { useEffect } from 'react';

async function siteViewInit() {
  await siteView4embed.init('agrilive-pano-container');
  await siteView4embed.start();
  await siteView4embed.signout();
  await siteView4embed.signinWithToken('pTqdixG8g2fLkdLyu2f0fGeZNvlQEgPF');
  await siteView4embed.goSiteView('9hivpe82w8');
  await siteView4embed.getLevelAll();
}

const PanoViewer = () => {
  useEffect(() => {
    siteViewInit();
  }, []);
  return <div id="agrilive-pano-container"></div>;
};

export default PanoViewer;
