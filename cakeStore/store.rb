class Store

    def initialize(product, price)
        @product = product
        @price = price
    end

    def buyProduct
        puts "You buy a product #{@product} for this price #{@price}."
    end

end