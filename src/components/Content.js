import { GIAO_VU } from '../config/global';
import { schedule } from '../store/schedule';

function Content({ mode }) {
    return (
        <div className="content">
            <header>
                <h2>{mode}</h2>
            </header>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">MaMH</th>
                        <th scope="col">Ten MH</th>
                        <th scope="col">Time</th>
                        <th scope="col">Date</th>
                        {!!(mode === GIAO_VU) && <th scope="col">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((sche, index) => (
                        <tr key={index}>
                            <th scope="row">{sche.MaMH}</th>
                            <td>{sche.name}</td>
                            <td>{sche.time}</td>
                            <td>{sche.date}</td>
                            {!!(mode === GIAO_VU) && (
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        Edit
                                    </button>
                                    <button type="button" class="btn btn-outline-danger">
                                        Delete
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Content;
