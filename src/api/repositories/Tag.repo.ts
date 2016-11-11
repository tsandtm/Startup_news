import { RepoBase } from './repositories.base';
import { Tag } from '../models/Tag.model';
import { Pool, QueryResult } from 'pg';

export class TagRepo extends RepoBase {

    constructor() {
        super();
    }

    public getList(): Promise<Tag[]> {
        let queryText = 'select * from test."n_Tag"';
        let pResult;

        pResult = this._pgPool.query(queryText)

        return pResult.then(result => {
            let Tags: Tag[] = result.rows.map(r => {
                let tag = new Tag();
                tag.TagID = r.TagID;
                tag.TagNameDisplay = r.TagNameDisplay;
                tag.TagNameKey = r.TagNameKey;
                tag.AccountID = r.AccountID;
                tag.IsDefault = r.IsDefault;
                return tag;
            });
            return Tags;
        })
            .catch(err => {
                console.error(err.message);
                return null;
            });
    }

}