export interface IResponseIEEE {
    total_records: number;
    total_searched: number;
    articles: IArticles[];
}

export interface IArticles {
    doi: string;
    publisher: string;
    title: string;
    issn: string;
    rank: string;
    authors : {
        author: IAuthor[]
    };
    access_type:string;
    abstract: string;
    article_number: string;
    pdf_url: string;
    html_url: string;
    abstract_url: string;
    publication_title: string;
    conference_location: string;
    conference_dates: string;
    publication_number: number;
    is_number: number;
    publication_year: number;
    start_page: string;
    end_page: string;
    citing_paper_count: number;
    citing_patent_count: number;
    index_terms: {
        ieee_terms: {
            terms: string[]
        };
        author_terms: {
            terms: string[]
        };
    };
    isbn_formats: {
        isbns: Isbns[]
    }
}

interface IAuthor {
    affiliation: string;
    full_name: string;
    author_order: number;
}

interface Isbns {
    format: string;
    value: string;
    isbnType: string;
}