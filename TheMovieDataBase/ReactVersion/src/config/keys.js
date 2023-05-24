import Prod from './prod';
import Dev from './dev';

const keys = import.meta.env.PROD? Prod : Dev;

export default keys;