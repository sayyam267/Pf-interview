export class FilterModel {
    public PageNo: number | null = 1;
    public PageSize: number | null = 30;
    public Query: string | null = null;
    public SortBy: string | null = null;
    public SortDesc: boolean | null = null;
    public Status: boolean | string | null = null;
    public EntityStatus?: string | null = null;

    private _TotalRecords: number = 0;
    private totalPages: number = 0;

    public TotalVisible: number = 10;

    constructor(data?: Partial<FilterModel>) {
        Object.assign(this, data);
    }

    get TotalPages() {
        return this.totalPages;
    }

    set TotalRecords(records: number) {
        this._TotalRecords = records;
        records = this.PageSize && this.PageSize > 0 ? Math.ceil(records / this.PageSize) : 0;
        this.totalPages = records;
    }
}

export class ListingFilterViewModel {
    public Type: string | null = null;
    public State: string | null = null;
    public Sort: string | null = null;
    public MinPrice: number | null = null;
    public MaxPrice: number | null = null;
    public MinCapRate: number | null = null;
    public MaxCapRate: number | null = null;
    public ListingStatus: number | null = null;

    constructor(data?: Partial<ListingFilterViewModel>) {
        Object.assign(this, data);
    }
}
