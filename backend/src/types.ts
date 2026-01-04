export interface IettAnnouncement {
    HAT: string;
    DUYURU: string;
    GUNCELLEME_SAATI?: string;
}

export interface IettResponse {
    success: boolean;
    data?: IettAnnouncement[];
    message?: string
}