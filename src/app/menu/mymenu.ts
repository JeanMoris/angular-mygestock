export interface Mymenu{
    id?: string;
    titre?: string;
    icon?: string;
    url?: string;
    active?: boolean;
    sousMenu?: Array<Mymenu>
}