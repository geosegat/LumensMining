declare module '*.svg' {
  import {SvgProps} from 'react-native-svg'; // Substitua 'react-native-svg' pelo pacote correto se estiver usando uma biblioteca diferente

  const content: React.FC<SvgProps>;
  export default content;
}
