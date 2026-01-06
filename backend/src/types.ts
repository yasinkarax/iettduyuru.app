export interface IettAnnouncement {
    HATKODU: string;
    HAT: string;
    TIP?: string;
    GUNCELLEME_SAATI?: string;
    MESAJ: string;
}

export interface IettResponse {
    success: boolean;
    data?: IettAnnouncement[];
    message?: string
}