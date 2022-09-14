import { FunctionComponent } from 'react';
const ImageGallery: FunctionComponent = () => (
  <div className='mx-auto'>
    <div className='grid-cols-3 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-4'>
      <div className='w-full roundedrow-span-2'>
        <img
          src='https://d2wvwvig0d1mx7.cloudfront.net/data/org/22246/media/img/cache/469x0/2300966_469x0.jpg'
          alt='image'
        />
      </div>
      <div className='w-full rounded col-span-2'>
        <img
          src='https://pdacsystems.com/wp-content/uploads/2020/08/vfd-controller-siemens-pcs7-automation-custom-design-front-view.jpg'
          alt='image'
        />
      </div>

      <div className='w-full rounded col-span-2'>
        <img
          src='https://solarmounts.com/wp-content/uploads/solar-project-photos/new-jersey/solar-carport-installation/Monmouth-Junction/New-Jersey-solar-parking-canopy.jpg'
          alt='image'
        />
      </div>
      <div className='w-full rounded'>
        <img
          src='https://electrexindustrial.com/wp-content/themes/electrexindustrial/img/machine-safety-guarding-systems-pic-4.png'
          alt='image'
        />
      </div>
      <div className='w-full rounded'>
        <img
          src='http://www.controlledmagnetics.com/images/transformer-varnishing-3.png'
          alt='image'
        />
      </div>
      <div className='w-full rounded col-span-2'>
        <img
          src='https://electrexindustrial.com/wp-content/themes/electrexindustrial/images/showwidth/68/800/industrial-automation-detroit-sany0343.jpg'
          alt='image'
        />
      </div>
      <div className='w-full rounded col-span-2'>
        <img
          src='https://www.mceneryautomation.com/cmss_files/imagelibrary/control-systems.jpg'
          alt='image'
        />
      </div>
      <div className='w-full rounded'>
        <img
          src='https://electrexindustrial.com/wp-content/themes/electrexindustrial/images/showwidth/64/800/industrial-automation-detroit-picture8.jpg'
          alt='image'
        />
      </div>
    </div>
  </div>
);

export default ImageGallery;
