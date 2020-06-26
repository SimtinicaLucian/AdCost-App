
import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Salariu } from '../model/salariu';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { isNumber } from 'util';


@Injectable()
export class SalariuService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


///////////////////////////////////////////////

 
    /**
     * Deletes a pet
     * 
     * @param number ID of pet to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePet(number: number, observe?: 'body', reportProgress?: boolean): Observable<Salariu>;
    public deletePet(number: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Salariu>>;
    public deletePet(number: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Salariu>>;
    public deletePet(number: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (number === null || number === undefined) {
            throw new Error('Required parameter number was null or undefined when calling deletePet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<Salariu>(`${this.basePath}/salariu/delete/${encodeURIComponent(String(number))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


///////////////////////////////////////////////






    


    /**
     * Add a new coast
     * 
     * @param body Pet object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public add(body: Salariu, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public add(body: Salariu, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public add(body: Salariu, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public add(body: Salariu, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling add.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/salariu/add`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }




    
    /**
     * F
     * M
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public salariuSearchAllGet(observe?: 'body', reportProgress?: boolean): Observable<Array<Salariu>>;
    public salariuSearchAllGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Salariu>>>;
    public salariuSearchAllGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Salariu>>>;
    public salariuSearchAllGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Salariu>>(`${this.basePath}/salariu/searchAll`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find pet by ID
     * Returns a single pet
     * @param number ID of pet to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPetById(number: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Salariu>>;
    public getPetById(number: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Salariu>>>;
    public getPetById(number: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Salariu>>>;
    public getPetById(number: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (number === null || number === undefined) {
            throw new Error('Required parameter number was null or undefined when calling getPetById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Salariu>>(`${this.basePath}/salariu/search/number/${encodeURIComponent(String(number))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }



       /**
     * Find pet by ID
     * Returns a single pet
     * @param nume ID of pet to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPetByNume(nume: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Salariu>>;
    public getPetByNume(nume: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Salariu>>>;
    public getPetByNume(nume: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Salariu>>>;
    public getPetByNume(nume: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (nume === null || nume === undefined) {
            throw new Error('Required parameter nume was null or undefined when calling getPetByNume.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Salariu>>(`${this.basePath}/salariu/search/nume/${encodeURIComponent(String(nume))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    
}