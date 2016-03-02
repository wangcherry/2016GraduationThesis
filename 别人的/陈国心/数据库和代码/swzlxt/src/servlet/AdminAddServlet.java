package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bean.InsertUpdateDelBean;

public class AdminAddServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public AdminAddServlet() {
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

		int responseText = 0;
		InsertUpdateDelBean ib = new InsertUpdateDelBean();
		String type = request.getParameter("type");
		if(type != null && type.equals("admin")){
			String args[] = {"name","pwd"};
			String row = "";
			String val = "";
			for(int i = 0;i < args.length;i++){
				if(i == args.length-1){
					row += args[i];
					val += "'"+request.getParameter(args[i])+"'";
				}else{
					row += args[i]+",";
					val += "'"+request.getParameter(args[i])+"',";
				}
			}
			String sql = "insert into admin("+row+") values("+val+")";
			responseText = ib.insertANDupdateANDdel(sql);
		}
		if(type != null && type.equals("users")){
			String args[] = {"name","pwd","number","college","classes","truename","phone","address","email"};
			String row = "";
			String val = "";
			for(int i = 0;i < args.length;i++){
				if(i == args.length-1){
					row += args[i];
					val += "'"+request.getParameter(args[i])+"'";
				}else{
					row += args[i]+",";
					val += "'"+request.getParameter(args[i])+"',";
				}
			}
			String sql = "insert into users("+row+") values("+val+")";
			responseText = ib.insertANDupdateANDdel(sql);
		}
		
		PrintWriter out = response.getWriter();
		out.print(responseText);
		out.close();
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
