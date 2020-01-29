using CoreAngularAuthCRUD1.Data;
using CoreAngularAuthCRUD1.Models;
using CoreAngularAuthCRUD1.Controllers;
using Microsoft.EntityFrameworkCore;
using System;
using Xunit;
using Microsoft.EntityFrameworkCore.Diagnostics;
using IdentityServer4.EntityFramework.Options;
using Microsoft.Extensions.Options;
using System.Linq;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace XUnitTestProject1
{ 
    public class UnitTest1 : IDisposable
    {
        readonly ApplicationDbContext context;

        // constructor runs before each test
        public UnitTest1()
        {
            // Need operationalStoreOptions when instantiating from "ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>"
            IOptions<OperationalStoreOptions> operationalStoreOptions = Options.Create<OperationalStoreOptions>(new OperationalStoreOptions());
            IOptions<OperationalStoreOptions> operationalStoreOptions2 = Options.Create<OperationalStoreOptions>(new OperationalStoreOptions()
            {
                //DeviceFlowCodes = new TableConfiguration("DeviceCodes"), // optional?
                //EnableTokenCleanup = false, // optional
                //PersistedGrants = new TableConfiguration("PersistedGrants"), // optional?
                //TokenCleanupBatchSize = 100, // optional?
                //TokenCleanupInterval = 3600, // optional?
            });
            // Got helper function from https://stackoverflow.com/questions/40876507/net-core-unit-testing-mock-ioptionst
            // Got data from https://medium.com/@rackriili/hello-thanks-for-answering-55cf54f2d05c. They don't actually seem to be needed.


            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString()) // if you want to use an in memory database (not relational but quick)
                //.UseSqlite("DataSource=:memory:", x => { })  // if you want to use in memory sqlite database (slower but relational)
                .Options;

            context = new ApplicationDbContext(options, operationalStoreOptions);

            //context.Database.OpenConnection(); // if you want to use in memory sqlite database (slower but relational)
            context.Database.EnsureCreated();

            var advertTypes = new List<AdvertTypes>()
            {
                new AdvertTypes { Id = 1, Type = "Trains", TypeDescription = "All Types"},
                new AdvertTypes { Id = 2, Type = "Planes", TypeDescription = "All Types"},
                new AdvertTypes { Id = 3, Type = "Automobiles", TypeDescription = "All Types"},
            };

            context.AdvertTypes.AddRange(advertTypes);
            context.SaveChanges();
        }


        [Fact]
        public async void GetAllAdvertTypes_Check_All_Received()
        {
            var query = new AdvertTypesController(context);

            var result = await query.GetAdvertTypes();  // async

            Assert.Equal(3, result.Value.ToList().Count);
            Assert.Equal(3, result.Value.Count());
        }

        [Fact]
        public async void GetAllAdvertTypes_Returns_OK()
        {
            var query = new AdvertTypesController(context);

            var result = await query.GetAdvertTypes();  // async

            Assert.IsType<ActionResult<IEnumerable<AdvertTypes>>>(result);
        }


        [Fact]
        public async void GetAllAdvertTypes_Check_First_And_Last()
        {
            var query = new AdvertTypesController(context);

            var result = await query.GetAdvertTypes();  // async

            Assert.Equal("Trains", result.Value.First().Type);
            Assert.Equal("Automobiles", result.Value.Last().Type);
        }

        [Fact]
        public async void GetAdvertType_Get_Id_2()
        {
            var query = new AdvertTypesController(context);

            var result = await query.GetAdvertTypes(2);  // async

            Assert.Equal("Planes", result.Value.Type);
        }

        [Fact]
        public async void GetAdvertType_Returns_OK()
        {
            var query = new AdvertTypesController(context);

            var result = await query.GetAdvertTypes(2);  // async

            Assert.IsType<ActionResult<AdvertTypes>>(result);
        }

        [Fact]
        public async void DeleteAdvertTypes_Delete_Id_3()
        {
            var query = new AdvertTypesController(context);

            var result = await query.DeleteAdvertTypes(3);  // async

            Assert.Equal("Automobiles", result.Value.Type);
        }

        [Fact]
        public async void DeleteAdvertTypes_Returns_OK()
        {
            var query = new AdvertTypesController(context);

            var result = await query.DeleteAdvertTypes(3);  // async

            Assert.IsType<ActionResult<AdvertTypes>>(result);
        }

        [Fact]
        public async void PostAdvertType_Add()
        {           
            var query = new AdvertTypesController(context);

            var newAdvertType = new AdvertTypes { Id = 4, Type = "Bikes", TypeDescription = "Fast" };

            var result = await query.PostAdvertTypes(newAdvertType);  // async
            var added = await query.GetAdvertTypes(4);  // async

            Assert.Equal(newAdvertType.Type, added.Value.Type);
            Assert.Equal(newAdvertType.TypeDescription, added.Value.TypeDescription);
            Assert.Equal(newAdvertType.Id, added.Value.Id);
            Assert.Equal(newAdvertType, added.Value);
            //Assert.Equal(newAdvertType, result.Value); // ??
        }

        [Fact]
        public async void PostAdvertTypes_Returns_OK()
        {
            var query = new AdvertTypesController(context);

            var newAdvertType = new AdvertTypes { Id = 4, Type = "Bikes", TypeDescription = "Fast" };
            var result = await query.PostAdvertTypes(newAdvertType);  // async

            Assert.IsType<ActionResult<AdvertTypes>>(result);
            Assert.IsType<CreatedAtActionResult>(result.Result);
        }

        [Fact]
        public async void PutAdvertType_Put()
        {
            var query = new AdvertTypesController(context);

            var newAdvertType = new AdvertTypes { Id = 3, Type = "Cars", TypeDescription = "Fast" };

            // https://stackoverflow.com/questions/36856073/the-instance-of-entity-type-cannot-be-tracked-because-another-instance-of-this-t/42475617
            var local = context.AdvertTypes.Local.Where(t => t.Id == 3).FirstOrDefault();
            if (local != null) context.Entry(local).State = EntityState.Detached; // only needed for xUnit testing

            var result = await query.PutAdvertTypes(3, newAdvertType);  // async
            var added = await query.GetAdvertTypes(3);  // async

            Assert.Equal(newAdvertType.Type, added.Value.Type);
            Assert.Equal(newAdvertType.TypeDescription, added.Value.TypeDescription);
            Assert.Equal(newAdvertType.Id, added.Value.Id);
            Assert.Equal(newAdvertType, added.Value);
            Assert.Equal(newAdvertType, result.Value); 
        }

        [Fact]
        public async void PutAdvertTypes_Returns_OK()
        {
            var query = new AdvertTypesController(context);

            var newAdvertType = new AdvertTypes { Id = 3, Type = "Cars", TypeDescription = "Fast" };

            // https://stackoverflow.com/questions/36856073/the-instance-of-entity-type-cannot-be-tracked-because-another-instance-of-this-t/42475617
            var local = context.AdvertTypes.Local.Where(t => t.Id == 3).FirstOrDefault();
            if (local != null) context.Entry(local).State = EntityState.Detached; // only needed for xUnit testing

            var result = await query.PutAdvertTypes(3, newAdvertType);  // async

            Assert.IsType<ActionResult<AdvertTypes>>(result);
        }


        // Runs after each test. They would all be deleted at the end of the tests but if it was in production
        // there would be a lot of tests so this avoids them building up.
        public void Dispose()
        {
            context.Database.EnsureDeleted();
            context.Dispose();
        }


        
    }


}

/// Only needed for xUnit testing but when using PUT there is a local copy of an object created that is tracked and therefore causes an error
/// Therefore add these lines before the PUT call to detach the entry.
// https://stackoverflow.com/questions/36856073/the-instance-of-entity-type-cannot-be-tracked-because-another-instance-of-this-t/42475617
// var local = context.AdvertTypes.Local.Where(t => t.Id == 3).FirstOrDefault();
// if (local != null) context.Entry(local).State = EntityState.Detached; // only needed for xUnit testing


/// If using InMemory ConfigureWarnings might be useful?:
//    var options = new DbContextOptionsBuilder<ApplicationDbContext>()
//        .UseInMemoryDatabase(Guid.NewGuid().ToString()).ConfigureWarnings(w =>
//        {
//            w.Ignore(InMemoryEventId.TransactionIgnoredWarning);
//        })
//        .Options;



/// Shows option of using "using" to setup and teardown:
//    using (var context = new ApplicationDbContext(options, operationalStoreOptions))
//    {
//        context.Database.OpenConnection();
//    }
