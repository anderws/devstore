
CREATE TABLE item (
    id SERIAL PRIMARY KEY,
    descriptiom character varying(255) NOT NULL UNIQUE,
    price numeric(15,6) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO quote (id, descriptiom, price) VALUES 
(1, 'Guitarra', 1000);