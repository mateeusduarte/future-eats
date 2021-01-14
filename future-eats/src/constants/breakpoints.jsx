export const size = {
  iphoneXMin: '375px',
  iphoneXMax: '812px',
  pixel2Min: '411px',
  pixel2Max: '731px',
  celMin: '320px',
  celMax: '420px',
  tablet: '421px',
  comp: '1200px',
};

export const device = {
  iphoneX: `(min-width: ${size.iphoneXMin}) and (max-width: ${size.iphoneXMax})`,
  pixel2: `(min-width: ${size.pixel2Min}) and (max-width: ${size.pixel2Max})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.comp})`,
};



//* constantes usada para deixar o site responsivo
