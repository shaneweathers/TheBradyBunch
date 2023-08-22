using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheBradyBunch.Models.ViewModels;

namespace TheBradyBunch.Controllers
{
    public class ArticlesController : Controller
    {
        public IActionResult List(int categoryid)
        {
            ArticleListViewModel alvm = new ArticleListViewModel
            {
                CategoryId = categoryid                
            };            
            return View("List", alvm);
        }

        public IActionResult GroupList(int categoryid)
        {
            ArticleListViewModel alvm = new ArticleListViewModel
            {
                CategoryId = categoryid
            };
            return View("GroupList", alvm);
        }
    }
}
