import { Container } from "./style";

export function TransactionsTable(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de App</td>
                        <td className="deposit">12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>lanche</td>
                        <td className="withdraw">2.000</td>
                        <td>COmida</td>
                        <td>20/02/2021</td>
                    </tr>
                   
                </tbody>
            </table>
        </Container>
    );
}