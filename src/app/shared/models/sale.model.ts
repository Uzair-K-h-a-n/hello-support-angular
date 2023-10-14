export interface Sale {
    "sale_date": String,
    "transaction_type": String,
    "payment_method": String,
    "customer_id": Number,
    "items": Array<Item>
}

export interface Item {
    "item_code": String,
    "price": String,
    "quantity": Number,
    "discount_amount": Number
}