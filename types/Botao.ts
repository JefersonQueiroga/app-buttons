export type TipoBotao = 'primario' | 'secundario' | 'sucesso' | 'perigo' | 'outline';
export type TamanhoBotao = 'pequeno' | 'normal' | 'grande';

export interface BotaoProps {
  titulo: string;
  tipo: TipoBotao;
  tamanho?: TamanhoBotao;
  arredondado?: boolean;
  icone?: string;
  onPress: () => void;
}