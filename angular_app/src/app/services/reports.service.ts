// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
// import { map } from "rxjs";
// @Injectable({
//     providedIn: 'root',
// })
// export class ReportsService {
//     constructor(private http: HttpClient) {}
//     tokenUrl = '.lab.opentext.com/otdsws/oauth2/token';
//     tokenParam = {
//         "grant_type": "client_credentials",
//         "client_secret": "hA7LfnZ02U9bsmR0hUApzCG=",
//         "client_id": "platformAdmin"
//     };
//     tokenHeaders = {
//         "Content-Type": "application/x-www-form-urlencoded"
//     };
//     bearerToken: string = '';
//     callApi(vmName: string, instanceName: string) {
//         this.http.post(`https://${instanceName}.${vmName}${this.tokenUrl}`, null, { params: this.tokenParam, headers: this.tokenHeaders})
//         .subscribe(res => {
//             this.bearerToken = `Bearer ${res['access_token']}`;
//             this.enableFeature();
//         });
//     }
//     enableFeature() {
//         console.log(this.bearerToken);
//         const headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', this.bearerToken).set('Host', "nrs.dev-vm-blr6.lab.opentext.com")
//         this.http.post('https://nrs.dev-vm-blr6.lab.opentext.com/api/v1/feature-control/configs/adminReporting/on', null, { headers: headers})
//         .subscribe(res => console.log(res)
//         )
//     }
// }


import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
@Injectable({
    providedIn: 'root',
})
export class ReportsService {
    constructor(private http: HttpClient) { }
    tokenUrl = '.lab.opentext.com/otdsws/oauth2/token';
    tokenParam = {
        "grant_type": "client_credentials",
        "client_secret": "hA7LfnZ02U9bsmR0hUApzCG=",
        "client_id": "platformAdmin"
    };
    tokenHeaders = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
    bearerToken: string = '';
    callApi(vmName: string, instanceName: string): Observable<any> {
        return this.http.post<obj>(`https://${instanceName}.${vmName}${this.tokenUrl}`, null, { params: this.tokenParam, headers: this.tokenHeaders })
    }
    enableFeature() {
        this.callApi('dev-vm-blr6', 'nrs')
            .subscribe((x: obj) => {
                this.bearerToken = x.access_token;
                console.log('this.tokenthis.tokenthis.tokenthis.tokenthis.token')
                const headers = {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                    'Accept': '*/*',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Authorization': `Bearer ${this.bearerToken}`
                };

                this.http.post('https://nrs.dev-vm-blr6.lab.opentext.com/api/v1/feature-control/configs/adminReporting/on', null, { params: {}, headers: headers }).pipe(map(res => res))
                    .subscribe(res => {
                        console.log('testiiiiiiii', res);
                    }
                    )
            });
    }

    self() {
        // const headers = new HttpHeaders({
        //   'Content-Type': 'application/json',
        //   'Access-Control-Allow-Origin': '*',
        //   'Access-Control-Allow-Credentials': 'true',
        //   'Access-Control-Allow-Headers': 'Content-Type',
        //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        //   'Accept': '*/*',
        //   'Accept-Encoding': 'gzip, deflate, br',
        //   'token': this.bearerToken
        // });

        // let headers = new HttpHeaders().set('Content-Type', 'application/json');
        // headers = headers.set('authorization', this.bearerToken)

        const httpOptions = {
            headers: new HttpHeaders({
                //'Content-Type': 'application/json',
                //'token': 'eyJraWQiOiI2ZDU5YWZhMDFiZDlhNDM0M2QzNTgzMDViNTkwZTM4OGIxMDk1Mzc0IiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI3NGEzNDQ5Ny0yMjdmLTQwMDAtYTE5ZC03YWE2ZGNjODFlZjMiLCJzY3AiOltdLCJkbXAiOnt9LCJzYXQiOjE2NzE0NzQ3NDIsImlzcyI6Imh0dHBzOi8vbnJzLmRldi12bS1ibHI2LmxhYi5vcGVudGV4dC5jb20vb3Rkc3dzIiwiZ3J0IjoiY2xpZW50X2NyZWRlbnRpYWxzIiwidHlwIjoiYWNjZXNzX3Rva2VuIiwicGlkIjoiT0F1dGhDbGllbnRzIiwicmlkIjp7fSwidGlkIjoiIiwic2lkIjoiMDIyZGUxMzQtYjUyMC00ZDFlLThiNjQtOGFkN2Y2OTJmZWNjIiwidWlkIjoiNWI1MDMwMzQtMzVhZi00YTU1LWI1YjYtYTNjZjgzYTljMDYxQE9BdXRoQ2xpZW50cyIsInVubSI6IjViNTAzMDM0LTM1YWYtNGE1NS1iNWI2LWEzY2Y4M2E5YzA2MSIsIm5hbWUiOiI1YjUwMzAzNC0zNWFmLTRhNTUtYjViNi1hM2NmODNhOWMwNjEiLCJleHAiOjE2NzE0NzgzNDIsImlhdCI6MTY3MTQ3NDc0MiwianRpIjoiZWQ1NTdiMzQtM2VmYi00NDgxLWE4N2MtMTU4MGZhNDU4NzZkIiwiY2lkIjoiNWI1MDMwMzQtMzVhZi00YTU1LWI1YjYtYTNjZjgzYTljMDYxIn0.degY_CPc3gsrg9cRzRZ5ChlxJB7Wfi8rQGDoaP3JcNIRz_G6DmS4KMYal7HzOZW83cp2gE6Wyg5HJ2cQKG7k-wCAKPgrWjmCdZ-QGc_Vd-RFMf7fm82OSQ9aSVnHaelMoUFtxLr5k6_CP5C4t_DldM6Bu_oU72GSSEi16CzyAU18Jd7xYD-jMyqiqbKxt3PgwisAsSMBBm3y3OWp1o5S8yhD9ZFCanFiYBSrQzNGfQ5v7Y36u7iqM7_FjsQfG33S_ppJckzYBqB4_Ry13xM5MC3zHgfggfjxbHn0Re6CL11ru75kt5Jo7kh_AHgXOUfqk8J7oF-GyDO9908UBw1lNQ',
                'Access-Control-Allow-Origin': '*',
                // 'Host': 'nrs.dev-vm-blr6.lab.opentext.com',
                'User-Agent': 'Apache-HttpClient/4.5.12 (Java/13.0.1)',
                'Accept': '*/*'
            })
        };

        this.http.get('https://nrs.dev-vm-blr6.lab.opentext.com/api/v1/users/self', httpOptions)
            .subscribe(data => {
                console.log('uuuuuuuuuuuuuuu', data);
            })
    }
}

interface obj {
    access_token: string;
    expires_in: number;
    token_type: string
}