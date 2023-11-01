require_relative 'product'
require_relative 'store'

product = Product.new
product.name = 'Forma para bolo redonda'
product.price = 36.00

Store.new(product.name, product.price).buyProduct


product1 = Product.new
product1.name = 'Forma para bolo com furo'
product1.price = 32.00

Store.new(product1.name, product1.price).buyProduct