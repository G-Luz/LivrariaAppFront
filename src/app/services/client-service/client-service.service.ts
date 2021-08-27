import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { MessageInterface } from 'src/app/models/interfaces/dto/message.interface';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'POST',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  // baseUrl: string = environment.urlMock;
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  saveClient(client: ClienteDTO): Observable<MessageInterface> {
    let payload = JSON.stringify(client);
    return this.http.post<MessageInterface>(
      `${this.baseUrl}/clientes`,
      payload,
      httpOptions
    );
  }

  getClientById(): Observable<ClienteDTO> {
    return this.http.get<ClienteDTO>(
      `${this.baseUrl}/clientes/meusdados/${Number(sessionStorage.getItem('isLogado'))}`,
      httpOptions
    );
  }

  getClients(): Observable<ClienteDTO[]> {
    return this.http.get<ClienteDTO[]>(`${this.baseUrl}/clientes/listarclientes`, httpOptions);
  }

  updateClientById(
    clientData?: ClienteDTO
  ): Observable<MessageInterface> {

    console.log("chega aca??")

    return this.http.put<MessageInterface>(
      `${this.baseUrl}/clientes?usuarioID=${Number(sessionStorage.getItem('isLogado'))}`,
      clientData,
      httpOptions
    );
  }

  deleteClientById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/clientes/${id}`, httpOptions);
  }
}
