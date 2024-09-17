/* types.ts */
import { Document } from '@contentful/rich-text-types';

export type BlogItem = {
    fields: {
        title: string;
        slug: string;
        date: Date;
        content: Document;
        cover: any;
    }
}
export type BlogItems = ReadonlyArray<BlogItem>;

export type BlogQueryResult = {
    items: BlogItems;
}   

export enum blogTag {
    artikel = "Artikel",
    kegiatan = "Kegiatan",
    video = "Video",
    galeri = "Galeri",
}