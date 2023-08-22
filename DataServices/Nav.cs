namespace TheBradyBunch.DataServices
{    
    public static class Nav 
    {
        
        public static string Active(string value, string current) =>            
            (value == current) ? "current-page" : "";

        public static string Active(int value, int current) =>
                (value == current) ? "current-page" : "";

        public static string ActivePaging(string value, string current) =>
            (value == current) ? "current-page-paging" : "";

        public static string ActivePaging(int value, int current) =>
                (value == current) ? "current-page-paging" : "";        

    }
}