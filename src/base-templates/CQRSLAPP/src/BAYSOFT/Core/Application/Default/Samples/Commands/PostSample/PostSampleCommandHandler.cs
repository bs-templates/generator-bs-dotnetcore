using MediatR;
using ModelWrapper.Extensions.Post;
using BAYSOFT.Core.Domain.Interfaces.Infrastructures.Data.Contexts;
using System.Threading;
using System.Threading.Tasks;

namespace BAYSOFT.Core.Application.Default.Samples.Commands.PostSample
{
    public class PostSampleCommandHandler : IRequestHandler<PostSampleCommand, PostSampleCommandResponse>
    {
        public IDefaultDbContext Context { get; set; }
        public PostSampleCommandHandler(IDefaultDbContext context)
        {
            Context = context;
        }
        public async Task<PostSampleCommandResponse> Handle(PostSampleCommand request, CancellationToken cancellationToken)
        {
            var data = request.Post();
            
            await Context.Samples.AddAsync(data);

            await Context.SaveChangesAsync();

            return new PostSampleCommandResponse(request, data, "Successful operation!", 1);
        }
    }
}
