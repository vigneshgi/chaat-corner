import React from 'react';

const Purchases = ({ purchases }) => {
    return (
        <div>
            <h2>Purchases</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Store ID</th>
                        <th>Date</th>
                        <th>Egg Quantity</th>
                        <th>Rate Per Egg</th>
                        <th>Given Cash</th>
                        <th>Remaining Cash</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map(purchase => (
                        <tr key={purchase.purchase_id}>
                            <td>{purchase.purchase_id}</td>
                            <td>{purchase.store_id}</td>
                            <td>{purchase.purchase_date}</td>
                            <td>{purchase.egg_quantity}</td>
                            <td>{purchase.rate_per_egg}</td>
                            <td>{purchase.given_cash}</td>
                            <td>{purchase.remaining_cash}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Purchases;
