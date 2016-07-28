describe("Testing response conversion", function(){

    it("converts a simple case", function(){
        var resp = {
            status: "200OK",
            url: "https://api.url.com/v1/getsmth",
            date: "2016-07-27T12:00:00",
            items: [
                {
                    id: "1233434",
                    name: "some name",
                    price: "1233242"
                },
                {
                    id: "12334323432",
                    name: "some name 2",
                    price: "0897945"
                }
            ]
        };
        var res = convertResponseToObjects(resp);

        expect(res).toEqual([
            new Product("1233434","some name","1233242"),
            new Product("12334323432", "some name 2", "0897945")
        ]);

        expect(res[0]).toEqual(jasmine.any(Product));

        expect(res[0].price).toEqual(jasmine.any(Number));

        expect(res[0].getFormattedPrice()).toEqual("$1,233,242.00");

    });

    it('converts partially filled data set', function(){
        var resp = {
            status: "200OK",
            url: "https://api.url.com/v1/getsmth",
            date: "2016-07-27T12:00:00",
            items: [
                {
                    id: "1233434",
                    name: "some name"
                },
                {
                    id: "12334323432",
                    name: "some name 2",
                    price: "0897945"
                }
            ]
        };
        var res = convertResponseToObjects(resp);

        expect(res).toEqual([
            new Product("12334323432", "some name 2", "0897945")
        ]);
    });

    it('converts empty case', function(){
        var resp = {
            status: "200OK",
            url: "https://api.url.com/v1/getsmth",
            date: "2016-07-27T12:00:00",
            items: []
        };
        var res = convertResponseToObjects(resp);

        expect(res).toEqual([]);
    });

    it('converts error response', function(){
        var resp = {
            status: "404NOT_FOUND",
            url: "https://api.url.com/v1/getsmth",
            date: "2016-07-27T12:00:00",
            items: [{
                id: "12334323432",
                name: "some name 2",
                price: "0897945"
            }]
        };
        var res = convertResponseToObjects(resp);

        expect(res).toEqual([]);
    })

});