package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bean.InsertUpdateDelBean;

public class DelServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public DelServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		response.setContentType("text/html;charset=gb2312");
		request.setCharacterEncoding("gb2312");
		
		String sql = "";
		String str = "";
		InsertUpdateDelBean ib = new InsertUpdateDelBean();
		
		String admin = request.getParameter("admin");
		String users = request.getParameter("users");
		String leave = request.getParameter("leave");
		String lost = request.getParameter("lost");
		
		if(admin != null && !admin.equals("")){
			sql = "delete from admin where id="+admin;
			ib.insertANDupdateANDdel(sql);
			str = "/admin/systemuser.jsp";			
		}
		if(users != null && !users.equals("")){
			sql = "delete from leave where lost in (select id from lost where users="+users+")";
			ib.insertANDupdateANDdel(sql);
			sql = "delete from lost where users="+users;
			ib.insertANDupdateANDdel(sql);
			sql = "delete from users where id="+users;
			ib.insertANDupdateANDdel(sql);
			str = "/admin/users.jsp";			
		}
		if(leave != null && !leave.equals("")){
			sql = "delete from leave where id="+leave;
			ib.insertANDupdateANDdel(sql);
			str = "/admin/leave.jsp";			
		}
		if(lost != null && !lost.equals("")){
			sql = "delete from leave where lost="+lost;
			ib.insertANDupdateANDdel(sql);
			sql = "delete from lost where id="+lost;
			ib.insertANDupdateANDdel(sql);
			str = "/admin/lost.jsp";			
		}
		
		request.getRequestDispatcher(str).forward(request, response);
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occure
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
